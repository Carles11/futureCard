import React from 'react';

import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';

const Contact = ({ dictionary }) {
    const { data: DIC } = dictionary;
    return (
        <Section>
            <Layout.InternPage>
                <h1>{DIC.CONTACT_TITLE}</h1>
            </Layout.InternPage>
        </Section>
    )
};

export default Contact;