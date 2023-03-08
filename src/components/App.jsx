import React from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <Section>
        <Form />
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
};
