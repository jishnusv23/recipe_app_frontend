
import RandomUsers from "../ui/RandomUsers";

const FeedbackSession = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 pt-10  text-black">
 
      <div className="pl-10">
        <h1 className="font-black text-4xl">The Simply Recipes</h1>
        <h1 className="font-black text-4xl">Team</h1>
        <p className="font-semibold mt-4">
          Simply Recipes is a trusted resource for home cooks <br /> with more
          than 3,000 tested recipes, guides, and meal <br /> plans, drawing over
          15 million readers each month <br /> from around the world. We’re
          supported by a group of <br /> recipe developers, food writers, recipe
          and product <br /> testers, photographers, and other creative <br />
          professionals.
        </p>
      </div>

     
      <div className="  overflow-auto mr-5  bg-orange-50 rounded-md ">
        <RandomUsers />
      </div>
    </div>
  );
};

export default FeedbackSession;
