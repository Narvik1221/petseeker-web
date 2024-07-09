import stylex from "@stylexjs/stylex";
const styles = stylex.create({
  // button: {
  //   width: {
  //     default: 200,
  //     "@media (max-width: 400px)": "100%",
  //   },
  // },
  // back: {
  //   backgroundColor: "green",
  //   ":hover": {
  //     transition: "0.3s",
  //     backgroundColor: "#0b3c6c",
  //   },
  // },
  cardContainer: {
    padding:"20px",
    minWidth:"250px",
    maxWidth: "500px",
    width: "100%",
    border: "1px solid gray",
    borderRadius: "5px",
    aspectRatio: "1",
  },
});

export default styles;
