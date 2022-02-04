import * as React from "react"
import {Helmet} from "react-helmet";

import {faGitAlt, faGoogleDrive, faRaspberryPi} from "@fortawesome/free-brands-svg-icons";
import {faBroadcastTower, faDatabase, faFlask, faKey} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

import '../styles/index.scss';
import PageWrapper from "../standard-components/PageWrapper";
import MainContent from "../standard-components/MainContent";
import Footer from "../standard-components/Footer";
import GreyHR from "../standard-components/GreyHR";
import IconRow from "../standard-components/icons/IconRow";
import ClickyIcon from "../standard-components/icons/ClickyIcon";
import {StaticImage} from "gatsby-plugin-image";

const SubText = styled.p`
    font-size: 1em;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const IndexPage = () => {
  return (
    <PageWrapper>
        <MainContent>
            <main>
                <Helmet>
                    <title>theLab &lt; DerpZ</title>
                </Helmet>

                <title>theLab</title>
                <div>
                    <FontAwesomeIcon icon={faFlask} size="5x" />
                    <h1>Welcome to theLab!</h1>
                    <h3>A playground for all my stuff</h3>
                    <GreyHR />
                    <p>
                        Thanks for checking out the lab. Most of these services are being self-hosted,
                        unless otherwise specified.
                    </p>
                    <SubText>
                        Note: Some of these services are only accessible within my LAN.
                    </SubText>
                </div>
                <div>
                    <div>
                        <h4>WAN-Accessible services</h4>
                    </div>
                    <IconRow>
                        <ClickyIcon url={"https://pw.derpz.net"} icon={faKey} />
                    </IconRow>
                </div>

            </main>
        </MainContent>
        <Footer>
            <StaticImage src={'../images/xrdz_logo.png'} alt={'XRDZ Logo'} style={{
                height: "1em",
                aspectRatio: "481/112",
            }}/>
            <br />
            &copy; 2022 XRDZ Software Engineering
        </Footer>
    </PageWrapper>
  )
}

export default IndexPage;
