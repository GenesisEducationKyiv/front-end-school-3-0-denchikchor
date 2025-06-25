import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import Logo from "../../assets/logo.svg?react";
import { useAppDispatch } from "../../hooks/redux-hook";
import { openCreateModal } from "../../features/ui/modalSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header} data-testid="tracks-header">
      <div className={styles.left}>
        <Logo className={styles.logo} />
      </div>

      <div className={styles.center}>
        <SearchInput />
      </div>

      <div className={styles.right}>
        <Button
          onClick={() => dispatch(openCreateModal())}
          data-testid="create-track-button"
          variant="primary"
        >
          Create Track
        </Button>
      </div>
    </header>
  );
};

export default Header;
