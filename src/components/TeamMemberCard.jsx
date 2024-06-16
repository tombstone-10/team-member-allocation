import maleProfile from "../images/male.png";
import femaleProfile from "../images/female.png";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img
        src={employee.gender === "male" ? maleProfile : femaleProfile}
        className="card-img-top mt-2"
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
