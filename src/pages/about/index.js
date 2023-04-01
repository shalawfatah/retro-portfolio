import React from 'react';
import Layout from '../../components/layout/Layout';
import Note from '../../components/pages/about/Note';

const note = {
  title: 'Dear reader',
  body: `
  <p>You might read this because we may work together.</p>
  <p>I'll be honest with you. I don't like the entire culture made by corporations and businesses where everyone is highly organized, extremely energetic and super confident.</p>
  <p>I'm not.</p>
  <p>I love my work. I hold projects as my own and I'm extremely tenacious when it comes to achieving things I want to achive.</p>
  <p>This is not something I say about myself, former managers and supervisors noted that.</p>
  <p>No, I don't waste anytime pretending, or training myself to be like that or to have any feature that you like.</p>
  <p>I don't like tracking my hours, it's a waste of time and resources.</p>
  <p>I'll take tea breaks and you should join me, I'm a fun company (sarcasm).</p>
  <p> I've seen lots of super professional “about me” and “summary” and “cover letters” that picture all these tidy professional employees that are just born perfect. They are not.</p>
  <p>But I am not as well. </p>
  <p>I thought some honesty may refresh your day.</p>
  <p>If supported, I'll push your work leaps forward, if not, I'll be an ordinary employee.</p>
  <p>Either way, take it easy.</p>
  `
}
const About = () => {
  return (
    <Layout classes={'bg-[#F5F5F5]'}>
      <Note title={note.title} body={note.body} />
    </Layout>
  )
}

export default About

export const Head = () => <title>About</title>