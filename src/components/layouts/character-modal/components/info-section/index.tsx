import { ICharacter } from "types/rick-morty-api";
import { ContentCard } from "../content-card/index";

type IInfoSection = Omit<
  ICharacter,
  "id" | "name" | "image" | "url" | "created"
>;
export const InfoSection = (props: IInfoSection) => {
  const { status, gender, location, origin, species, type, episode } = props;

  return (
    <>
      <ContentCard label="Status" value={status} />
      <ContentCard label="Species" value={species} />
      <ContentCard label="Gender" value={gender} />
      <ContentCard label="Current Location" value={location.name} />
      <ContentCard label="Fisrt Seen" value={origin.name} />
      <ContentCard
        label="Number of Episodeos"
        value={episode.length.toString()}
      />
    </>
  );
};
