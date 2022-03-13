import TextEffect from "./TextEffect";

const TeamCard = ({ image, name, designation }) => {
  return (
    <div>
      <img src={image} width="100%" height="auto" />
      <div id="style__heading" className="mt-3">
        <TextEffect title={name} />
      </div>
      <p className="text-light">{designation}</p>
    </div>
  );
};

export default TeamCard;
