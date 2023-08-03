import Subtitle from "../Typography/Subtitle";

function TitleCard({ title, children, topMargin, TopSideButtons }) {
  return (
    <div
      className={
        "card w-full rounded-xl bg-base-100 transition duration-100 delay-100 hover:shadow-lg ease-in-out hover:-translate-y-0.4 hover:scale-120" +
        (topMargin || "mt-6")
      }
    >
      {/* Title for Card */}
      {/* <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}

        {TopSideButtons && (
          <div className="inline-block float-right">{TopSideButtons}</div>
        )}
      </Subtitle> */}

      <div className="h-full w-full pb-1 bg-base-100">{children}</div>
    </div>
  );
}

export default TitleCard;
