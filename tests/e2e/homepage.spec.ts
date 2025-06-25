import { test, expect } from '@playwright/test';

const uniqueTitle = `Test Song ${Date.now()}`;
const newTrack = {
  title: uniqueTitle,
  artist: 'Artist',
  album: 'Album',
  genre: 'Jazz',
  coverImage: 'https://picsum.photos/seed/What',
};

test.describe('Complete track lifecycle', () => {
  test('add, view, search, delete track', async ({ page }) => {
    // 1. Open the list page
    await page.goto('/tracks');
    await expect(page.getByText('Bulk select')).toBeVisible();

    // 2. Add a new track
    await expect(page.getByTestId('track-form')).toBeHidden();
    await page.getByTestId('create-track-button').click();
    await expect(page.getByTestId('track-form')).toBeVisible();

    await page.getByTestId('input-title').fill(newTrack.title);
    await expect(page.getByTestId('input-title')).toHaveValue(newTrack.title);

    await page.getByTestId('input-artist').fill(newTrack.artist);
    await page.getByTestId('input-album').fill(newTrack.album);
    await page.locator('[data-testid="genre-selector"] select').selectOption(newTrack.genre);

    // 2) Verify that tag shows up in the selected-genres list:
    await expect(page.getByRole('button', { name: `Remove genre ${newTrack.genre}` })).toBeVisible();
    await page.getByTestId('input-cover-image').fill(newTrack.coverImage);

    await page.getByTestId('submit-button').click();

    // 3. Wait for the form to close and success toast
    await expect(page.getByTestId('track-form')).toBeHidden();
    await expect(page.getByTestId('toast-success')).toBeVisible();

    // 4. Locate the newly created row
    const createdRow = page
      .locator('li[data-testid^="track-item-"]')
      .filter({ hasText: newTrack.title });
    const testId = await createdRow.getAttribute('data-testid');
    if (!testId) throw new Error('Could not find new track row');
    const createdId = testId.replace('track-item-', '');

    // 5. Verify it appears in the list
    await expect(page.getByTestId(`track-item-${createdId}`)).toBeVisible();
    await expect(page.getByTestId(`track-item-${createdId}`)).toContainText(
      newTrack.title
    );

    // 6. Search for it
    const searchInput = page.getByTestId('search-input');
    await searchInput.fill(newTrack.title);
    await expect(
      page.getByTestId(`track-item-${createdId}`)
    ).toBeVisible();

    // 7. Clear search
    await searchInput.clear();
    await expect(
      page.getByTestId(`track-item-${createdId}`)
    ).toBeVisible();

    // 8. Select and delete it
    await page.getByTestId(`edit-track-${createdId}`).click();

    await page.getByTestId(`delete-track-${createdId}`).click();
    await expect(page.getByTestId('confirm-dialog')).toBeVisible();

    await page.getByTestId('confirm-delete').click();
    await expect(page.getByTestId('confirm-dialog')).toBeHidden();
    await expect(page.getByText('Track deleted')).toBeVisible();

    // 9. Finally, ensure it’s gone
    await expect(
      page.getByTestId(`track-item-${createdId}`)
    ).not.toBeVisible();
  });
});
