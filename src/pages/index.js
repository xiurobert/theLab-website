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
                        <SubText>From left to right: Git Server, Nextcloud, Vaultwarden (feel free to sign up!)</SubText>
                    </div>
                    <IconRow>
                        <ClickyIcon url={"https://git.derpz.net"} icon={faGitAlt}/>
                        <ClickyIcon url={"https://drive.derpz.net"} icon={faGoogleDrive} />
                        <ClickyIcon url={"https://pw.derpz.net"} icon={faKey} />
                    </IconRow>
                </div>
                <div>
                    <div>
                        <h4>Lan-Only services</h4>
                        <SubText>From left to right: qBittorrent, Pi-Hole 0, Pi-Hole 1, phpMyAdmin</SubText>
                    </div>
                    <IconRow>
                        <ClickyIcon url={"http://qbt.old-pc.box"} icon={faBroadcastTower}/>
                        <ClickyIcon url={"http://192.168.1.2/admin"} icon={faRaspberryPi} />
                        <ClickyIcon url={"http://192.168.1.3/admin"} icon={faRaspberryPi} />
                        <ClickyIcon url={"http://pma.old-pc.box"} icon={faDatabase} />
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
