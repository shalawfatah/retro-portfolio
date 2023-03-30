import React from 'react'
import Layout from '../../components/layout/Layout'
import Note from '../../components/pages/about/Note'
const note = {
  title: 'Dear Hiring Manager',
  body: `Take a deep breath, let's have a grown up discussion. 
  I'm not a model employee or model anything, but I'm a damn good dev who strives to be better every day. 
  I drink tea a lot, and may take smoking breaks. 
  No tracking hours, I do tasks and I may do additional tasks, 
  overtime and weekends. 
  My pet peeve is mistreatment and there is a lot of it by employers, 
  so let's settle something down. I will do my tasks,
  you will be the boss. If I did not, you can fire me immediately, 
  but no office politics, no smirking and childish chiding,
  I love my peace and your peace and if it did not work out, it's easy to say it. 
  Let's be real, we are in a business relationship, not a family or anything, 
  and so long you know that, I know that. 
  Other than that, I'll always be your rock-star developer who is the best at 
  what he does. 
  I've seen lots of super professional “about me” and “summary” and “cover letters” that picture all these tidy professional employees that are just born perfect. They are not.
  But I am not as well. 
  I thought some honesty may refresh your day. At least you know it's not written by ChatGPT.
  If this looks like someone you can handle, go on. 
  If not, let me give you some sarcasm: 
  My life was a ruin when you never showed up`
}
const About = () => {
  return (
    <Layout classes={'bg-[#F5F5F5]'}>
      <Note title={note.title} body={note.body} />
    </Layout>
  )
}

export default About