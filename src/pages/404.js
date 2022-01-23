import * as React from "react"

import "../styles/index.scss";

import PageWrapper from "../standard-components/PageWrapper";
import MainContent from "../standard-components/MainContent";
import Footer from "../standard-components/Footer";

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <MainContent>
        <main>
            <h1>404 Not Found</h1>
            <p>The server was unable to locate what you were looking for</p>
        </main>
      </MainContent>
      <Footer>
        &copy; 2022 XRDZ Software Engineering
      </Footer>
    </PageWrapper>
  )
}

export default NotFoundPage
