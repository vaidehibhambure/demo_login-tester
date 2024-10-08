'use client';

import React from 'react';

import { Box, Button, Text, Title, Center, Anchor } from '@mantine/core';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface PrivacyPolicyProps {
  toggle: () => void; // Function to toggle visibility or perform any action
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ toggle }) => {
  const { t } = useTranslation();

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
          CARELYO PRIVACY POLICY
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          CARELYO is a digital health platform that caters to the health and well-being of its users. We are committed to protecting the privacy of your health information. Our privacy policy is in compliance with the requirements of the laws to maintain and protect your private health information and to provide you with this notice of our privacy practices.
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          This Policy applies to our use of all data collected by us concerning your use of our site CARELYO. Kindly ensure that you read and understand this privacy policy. Upon your first use of our site, you will be required to read and accept it when signing up for an account. If you do not accept & agree with this privacy policy, you may stop using our site immediately.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Information about us
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Our sites, platform available through carelyo.io, carelyo.com, carelyo.se, carelyo.shop is owned and operated by SWEDCON18 AB, a company incorporated under the Laws of Sweden with a registered office at Allmogevägen 106, Växjö, Kronoberg County. 
          <br />
          Our LinkedIn: <a href="https://linkedin.com/in/carelyo" target="_blank" rel="noopener noreferrer">linkedin.com/in/carelyo</a>
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          What Does This Policy Cover?
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          This Privacy Policy applies only to your use on our site. It does not extend to any websites shared on our sites. We have no control and responsibility over the use or storage of your personal data on any websites other than CARELYO website. We advise you to check the privacy policies of any such websites before providing them with any of your data.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          What Data Do We Collect?
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          For the purpose of providing you quality and efficient service, we will need the following data:
          <ul>
            <li>Demographic Information: name, address, date of birth, phone number, email address, etc.</li>
            <li>Medical history: medications, allergies, past surgeries, family health history, immunization and vaccination, etc.</li>
            <li>Diagnosis: medical conditions, symptoms, diagnosis, etc.</li>
            <li>Treatment plans</li>
            <li>Billing information: medical bills, payment details, etc.</li>
            <li>Other relevant information: lab results, imaging reporting, etc.</li>
          </ul>
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          What Do We Do With Your Personal Data?
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          We make use of your private health information for the following purposes:
          <ul>
            <li>To provide easy, adequate and appropriate medical diagnosis, treatment and care.</li>
            <li>To ease your healthcare operations and activities such as maintaining medical records, scheduling appointments, follow-ups by doctors and so on.</li>
            <li>To obtain payments of medical bills.</li>
            <li>To improve the quality of our services through new features, offerings, and promotional services.</li>
          </ul>
          We also use your data to aid us in providing the best services and experience with our product. This includes:
          <ul>
            <li>Managing your account and access to our services.</li>
            <li>Personalizing your experience while using our product.</li>
            <li>Supplying you with emails of newsletters, updates, alerts, and so on (which you may choose to subscribe to).</li>
            <li>Analyzing your experience and gathering feedback to enable us to continually improve our service and your experience.</li>
            <li>Market Research.</li>
          </ul>
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Disclosure of Your Personal Data
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          CARELYO understands that these data are your personal and private health information; hence we are committed to protecting it and not disclosing it to any third party except with your written authorization. Irrespective of this, we may disclose your data to third parties without your written authorization in the following circumstances:
          <ul>
            <li>To Health care providers.</li>
            <li>To Public health Authorities: We may disclose your private health information to public health authorities for reporting purposes as required by law.</li>
            <li>As required by law: This could be through court orders, by complying with the requirements of legislation or governmental authority.</li>
          </ul>
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Rights of Users
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          At CARELYO, you have rights over your private health information. These rights are highlighted as follows:
          <ul>
            <li>Right to access and review your personal data: You can request a copy of your personal data through the provided contact details.</li>
            <li>Right to request amendment of records: You may request amendment of records in cases where they are believed to be inaccurate or incomplete.</li>
            <li>Right to request restriction: Our users have the rights to request restriction on how we use and disclose their private health information.</li>
            <li>Right to file a complaint or enquiry: In any case of violation of privacy, you have the right to file a complaint with the appropriate Data Protection authorities.</li>
          </ul>
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          How We Store and Secure Your Data
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Data security is of great importance to us and is required by law. We have put in place technical and organizational measures to ensure confidentiality, integrity, and availability of your personal data. These measures include:
          <ul>
            <li>Physical security measures such as restricted access to records.</li>
            <li>Technological and administrative control and procedures via encryption of data.</li>
          </ul>
          Notwithstanding the security measures that we take, it is pivotal that our users take suitable precautions when transmitting their data to us via the internet. We will ensure that your personal data is processed in an appropriately secured manner, including protection against unauthorized or unlawful processing, access, loss, destruction, damage, or any form of data breach.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          How We Retain and Dispose Your Personal Data
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          We shall retain your private health information for as long as it is needed to provide you with care. Your data will be deleted if we no longer need it in accordance with the terms of our Data Retention Policy. Our general data retention policy shall be in force unless the user specifically requests its deletion.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Changes To This Privacy Policy
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          In the event of any changes to this privacy policy, we shall immediately post any changes to our websites or provide you with a revised copy. We recommend that you check this page regularly to keep up-to-date.
        </Text>
        <Title order={2} style={{ fontSize: '20px', marginBottom: '15px' }}>
          Contacting Us
        </Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
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

export default PrivacyPolicy;
