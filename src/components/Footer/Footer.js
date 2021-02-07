import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,
         FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle,
        SocialMedia, SocialMediaWrap, SocialIcon, SocialLogo, SocialIconLink, WebsiteRights, SocialIcons } from './Footer.elements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        KAH HWA
                    </SocialLogo>
                    <WebsiteRights>Made This In 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
