const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h2>Team Member Allocation</h2>
          <h4 className="fw-normal">
            {teamMemberCount === 1
              ? `${selectedTeam} has ${teamMemberCount} member.`
              : `${selectedTeam} has ${teamMemberCount} members.`}
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
