import RenderProfile from "../features/profiles/RenderProfile";

const SquatchProfileScreen = ({ route }) => {
  const { squatch } = route.params

  return <RenderProfile squatch={squatch} />;
}

export default SquatchProfileScreen;