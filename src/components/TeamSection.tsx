import SectionWrapper from "./SectionWrapper";

const TeamSection = () => (
  <SectionWrapper id="team" className="team">
    <h2>Meet the Amajungle Team</h2>
    <p className="team-intro">
      Work directly with our founders — experienced Amazon professionals personally invested in your success.
    </p>
    <div className="team-bios">
      <div className="team-member">
        <img
          src="/Allysa.jpg"
          alt="Allysa Kate, Co-Founder and CEO"
          className="team-photo"
        />
        <h4>Allysa Kate</h4>
        <span>Co-Founder and CEO</span>
        <p>10+ years of hands-on Amazon experience. Manages PPC campaigns, client strategy, and account optimization. Direct access guaranteed.</p>
      </div>
      <div className="team-member">
        <img
          src="/Darwin.jpg"
          alt="Darwin, Co-Founder and CTO"
          className="team-photo"
        />
        <h4>Darwin</h4>
        <span>Co-Founder and CTO</span>
        <p>Builds the systems and infrastructure that power our operations. Handles technical setup, automation, and platform optimization.</p>
      </div>
    </div>
  </SectionWrapper>
);

export default TeamSection;