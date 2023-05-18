import Layout from "@/containers/layout/layout";
import styles from "./404.module.scss";

function Custom404() {
  return (
    <Layout>
      <div className={styles.page404}>
        <h1>404 - Page Not Found</h1>
      </div>
    </Layout>
  )
}

export default Custom404;