import React from 'react';
import { Box, Button, Text, Title, Center, Anchor } from '@mantine/core';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface TermsAndConditionsProps {
  toggle: () => void; // Function to toggle visibility or perform any action
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ toggle }) => {
  const { t } = useTranslation();
  const providerCountry = import.meta.env.VITE_PROVIDER_COUNTRY;

  return (
    <div className="page-wrapper" style={{ height: '100vh', overflowY: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box className='container' style={{ width: '80%', maxWidth: '800px', height: '80vh', overflowY: 'scroll', position: 'relative', zIndex: 101, backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <Center inline={true} style={{ marginBottom: '20px' }}>
          <BsArrowLeft size={15} />
          <Anchor ml={5} component={Link} to={'/'} onClick={toggle}>
            {t('PageControls-back')}
          </Anchor>
        </Center>
        <Title order={1} style={{ fontSize: '24px', marginBottom: '20px' }}>
          TERMS AND CONDITIONS
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Please read and review these terms and conditions carefully before using this website [www.carelyo.io, www.carelyo.se, www.carelyo.shop, www.carelyo.com] (“website” “service” “platform”) operated by CARELYO (“we” “us” “our”).
          <br /><br />
          By using this website, you have confirmed to be bound by this Agreement to comply with our terms. If you do not wish to be bound by this agreement, you are advised to stop using the website. CARELYO only grants access to its services to those who have accepted the terms and conditions of the website.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Users Account
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          As a user of this website, you may be asked to register with us and provide private information for the registration. You are to give accurate information and also be responsible for maintaining the safety and security of your account and your identifying information. You are also responsible for any activities under your account or password. You are advised to protect your password and login details and not to share them with anyone. In case of any issue regarding the security of your account, inform us immediately so that we can address the issue accordingly.
          <br /><br />
          To enhance the security and convenience of your login process, we also use third-party authentication through Google OAuth 2.0. This allows for a secure and seamless login experience using your Google account.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Privacy Policy
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Our privacy policy applies to the use of your private information for the management and access of our services and to offer you the best experience. Before you sign in to our website, you are advised to read and understand our privacy policy to help you understand our privacy practices.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Intellectual Property
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          All materials, products, services, and contents such as images, texts, and so on provided on the website are owned by CARELYO including all trademarks, patents, copyrights, and other intellectual property. You agree not to reproduce or redistribute CARELYO intellectual properties and should any issue concerning an intellectual property claim arise, you must contact us to reach an agreement or resolve the issue as the case may be.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Condition of Use
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Users must abide by the terms of this agreement and must be responsible for using our website as appropriately stated. You must be at least 18 years of age to use the website. By using this website, you warrant that you are 18 years or older and legally adhere to these terms. Any form of illegal activity, unauthorized access attempts, or disruptive behavior is strictly prohibited on the website. If you are under 18 years of age, you must use the website under the supervision of a parent or legal guardian. Our support team is readily available to provide assistance should any issue arise from the use of our website.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Limitations of Liability
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          CARELYO will not assume liability for any damage that may occur as a result of misuse of the website, failure of user to protect his or her log-in details, or age misrepresentation of the user. We disclaim all warranties, expressed or implied, including but not limited to the website content, accuracy, or uninterrupted services. You agree to indemnify CARELYO against any legal claims, demands, or damages that may arise from your use or misuse of the website.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Applicable Law and Dispute Resolution
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          You agree that the applicable law of {providerCountry} governs this Terms and Conditions Agreement as well as any dispute or conflict that ensues from this agreement or with CARELYO and its affiliates, if any. You also agree that any disputes shall be resolved through arbitration with the exclusive jurisdiction of {providerCountry}.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Modifications of T&C
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          CARELYO reserves all rights to modify or update this agreement and shall notify you of any changes as soon as it is incorporated into the agreement.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Contact Information
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          For further clarification of this agreement, you can contact us through:
          <br />
          Email: <a href="mailto:support@carelyo.io">support@carelyo.io</a>
        </Text>
        <Center inline={true} style={{ marginBottom: '20px' }}>
          <BsArrowLeft size={15} />
          <Anchor ml={5} component={Link} to={'/'} onClick={toggle}>
            {t('PageControls-back')}
          </Anchor>
        </Center>
      </Box>
    </div>
  );
}

export default TermsAndConditions;
