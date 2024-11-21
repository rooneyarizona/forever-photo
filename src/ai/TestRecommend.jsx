import imageA from "../client/assets/IMG_0108.jpg";
import imageB from "../client/assets/IMG_3937.jpg";

function TestRecommend() {
  function cosineSimilarity(imageA, imageB) {
    const dotProduct = imageA.reduce(
      (sum, val, idx) => sum + val * imageB[idx],
      0
    );
    const magnitudeA = Math.sqrt(
      imageA.reduce((sum, val) => sum + val * val, 0)
    );
    const magnitudeB = Math.sqrt(
      imageB.reduce((sum, val) => sum + val * val, 0)
    );

    return dotProduct / (magnitudeA * magnitudeB);
  }

  return (
    <div>
      <h1>Recommendation Model and {cosineSimilarity}</h1>
      <span>
        <img src={imageA} />
      </span>
      <span>
        <img src={imageB} />
      </span>
    </div>
  );
}

export default TestRecommend;
