import InfoModal from "../../allShared/InfoModal/InfoModal";
import { useState } from "react";

const example = () => {
  // InfoModal -------------
  const [imVis, setImVis] = useState(true);

  const chosenAction = () => {
    console.log("deleting");
  };
  // ---

  return (
    <>
      {imVis && (
        <InfoModal
          title={"Delete Post"}
          message={
            "Are you sure you wish to delete this post?"
          }
          buttons={["No", "Yes"]}
          actionOn={"Yes"}
          action={chosenAction}
          setVis={setImVis}
        />
      )}
    </>
  );
};

export default example;
