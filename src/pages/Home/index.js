import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { isAuth } from "../../utils";

import styles from "./index.module.css";

export default function Home() {
  return isAuth() ? (
    <div className={styles.root}>
      {/* 左侧菜单 */}
      <aside className={styles.aside}>菜单</aside>
      {/* 右侧 */}
      <main className={styles.main}>

        {/* 头部导航 */}
        <header className={styles.header}>
          <nav>导航</nav>
        </header>

        {/* 内容区域 */}
        <article className={ styles.article }>
          {/* 路由渲染 */}
          <Outlet />
        </article>

        {/* 底部 */}
        <footer className={styles.footer}>footer</footer>

      </main>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
