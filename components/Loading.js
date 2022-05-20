import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading({ loadingMessage }) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <FontAwesomeIcon icon="spinner" spin size="3x" />

      <h2 className="text-center text-lg mt-8">{loadingMessage}</h2>
    </div>
  );
}
