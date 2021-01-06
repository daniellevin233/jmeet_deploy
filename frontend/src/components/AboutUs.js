import { Scrollbars } from "rc-scrollbars";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="content">
      <h3>
        <strong>About Us</strong>
      </h3>
      <hr />
      <Scrollbars style={{ width: "100%", height: "400px" }}>
        <p>
          "When the Internet is used as a way station on the route to enhancing
          existing relationships and forging new social connections, it is a
          useful tool for reducing loneliness. But when social technologies are
          used to escape the social world and withdraw from the “social pain” of
          interaction, feelings of loneliness are increased"
        </p>
        <p style={{ fontSize: "9px" }}>
          Loneliness and Social Internet Use: Pathways to Reconnection in a
          Digital World? (2018), Kexin Wang, Eline Frison, Steven Eggermont,
          Laura Vandenbosch
        </p>
        <hr />
        <p>
          We all face loneliness at some point in our lives. Moving to another
          city, starting uni, joining a sport group – they might pose a social
          challenge. We often use technology to solve problems, but it seems
          like social media actually increases this particular problem.
        </p>
        <p>
          Facebook, Instagram and others are built to serve social loneliness –
          that is the need to have many friends. But on the other side, they
          increase emotional loneliness, the kind of loneliness in which you
          miss an intimate tie. Well, we believe that technology can also help
          us form meaningful friendships, when designed to that purpose.
        </p>
        <p>
          As the Covid-19 crisis immerged on March 2020, we lost the ability to
          physically meet and form connections. Not only that, connections are
          no longer spontaneous. On the past year, you probably had to initiate
          and somehow find people that share the same interests as you. If you
          succeeded – horray! But if you’re like the rest of us, then Jmeet
          would be a great solution.
        </p>
        <p>
          This is the reason we’ve created Jmeet: we wish to help the student
          community in Jerusalem maintain a strong social experience during
          Covid-19. Our goal is to decrease sense of loneliness by creating an
          online platform for forming meaningful and intimate connections among
          students.
        </p>
        <p>
          Jmeet is an application that matches students (like yourself) who have
          similar interests and is built to bypass both mental and technological
          obstacles that prevent students from forming new friendships online.
          We use machine learning to find other students that best matches you,
          and help to connect. The only members who are allowed on this app are
          HUJI students, that’s it. You can choose whether you’d like to meet
          people in small groups (up to five people) or in person, one-on-one.
        </p>
        <p>
          Sounds good? Sign-up and try it, the worse thing that can happened is
          that you’ll find you next best friend 😊
        </p>
        <p>
          *this is still a very early BETA version, so there might be problems.
          We would appreciate your feedback and would love to hear your
          thoughts. You can send a comment on the ‘Contact Us’ tab.
        </p>
        <hr />

        <br />
      </Scrollbars>
      <div></div>
    </div>
  );
};

export default AboutUs;
