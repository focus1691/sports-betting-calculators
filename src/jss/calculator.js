import resultChipStyle from "./ResultChip";
import resultTextArea from "./ResultTextArea";

const calculatorStyle = (theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    border: "3px dotted #c58800",
    boxShadow:
      "inset 0 -1px 0 0 #000, inset 0 1px 0 0 #000, 0 1px 0 0 #000, 0 -1px 0 0 #000",
    marginBottom: "1px",
    background: "#2d2d2d",
    "& > *": {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  title: {
    background: "#000",
    color: "#fff",
    "& .MuiTypography-h1": {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    "& .MuiIconButton-root": {
      float: "right",
      padding: 0,
    },
  },
  selection: {
    padding: theme.spacing(1),
    display: "flex",
    "& .MuiFormLabel-root": {
      margin: theme.spacing(1),
    },
    "& .MuiInputLabel-formControl": {
      borderColor: "red",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-animated": {
      color: "#ff8f46",
    },
    "& .MuiInput-formControl": {
      "&:before": {
        borderColor: "#fff",
      },
      "&:after": {
        borderColor: "#fff",
      },
      "&:focused": {
        borderColor: "#8CE7FC",
      },
    },
  },
  select: {
    padding: theme.spacing(1),
    "& .MuiFormLabel-root": {
      margin: theme.spacing(1),
    },
    "& .MuiSelect-select": {
      color: "#ff8f46",
      "& option": {
        color: "#000",
      },
    },
  },
  selectContainer: {
    "& .MuiInput-underline": {
      "&:before": {
        borderColor: "#fff",
      },
      "&:after": {
        borderColor: "#fff",
      },
      "&:focused": {
        borderColor: "#8CE7FC",
      },
    },
  },
  result: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontWeight: "bold",
    "& .MuiFormLabel-root": {
      padding: theme.spacing(1),
    },
    "& .MuiInputLabel-formControl": {
      borderColor: "red",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-animated": {
      color: "#fff",
    },
    "& .MuiInput-formControl": {
      "&:before": {
        color: "#73cd44",
        borderBottom: "1px dashed #78e7fc",
      },
      "&:after": {
        borderColor: "#fff",
      },
      "&:focused": {
        borderColor: "#8CE7FC",
      },
    },
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
  },
  resultText: {
    marginTop: theme.spacing(4),
    color: "#fff",
    borderBottom: "1px dashed #78e7fc",
    fontWeight: "bold",
  },
  resultTextBonus: {
    marginTop: theme.spacing(4),
    color: "#fff",
    borderBottom: "1px dashed #78e7fc",
    fontWeight: 400,
    fontSize: 16,
    paddingBottom: 3,
  },
  chipStyle: {
    // marginTop: theme.spacing(4),
    color: "#fff",
    borderBottom: "1px dashed #78e7fc",
    fontWeight: 400,
    fontSize: 20,
    paddingBottom: 3,
    textAlign:"center",
    width:"95%",
    margin:"auto"
  },
  resultMain: {
    margin: theme.spacing(1),
    fontWeight: "bold",
    "& .MuiFormLabel-root": {
      borderColor: "red",
    },
    "& .MuiInputLabel-formControl": {
      borderColor: "red",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-animated": {
      color: "#fff",
    },
    "& .MuiInput-formControl": {
      "&:before": {
        color: "#73cd44",
        borderBottom: "1px dashed #73cd44",
      },
      "&:after": {
        borderColor: "#fff",
      },
      "&:focused": {
        borderColor: "#8CE7FC",
      },
    },
  },
  resultChip: {
    ...resultChipStyle,
  },
  resultTextArea: {
    ...resultTextArea,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  resultTitle: {
    textDecoration: "underline",
    textAlign: "center",
  },
  resultItem: {
    display: "list-item",
    listStyleType: "disc",
    listStylePosition: "inside",
    padding: theme.spacing(1),
  },
  controls: {
    [theme.breakpoints.down("lg")]: {
      textAlign: "end",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "end",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      textAlign: "center",
    },
  },
  calculateBtn: {
    background: "#095609",
    color: "#fff",
    border: "2px solid #fff",
    "&:hover": {
      background: "#000",
    },
  },
  clearBtn: {
    margin: theme.spacing(1),
    background: "#ce3b3b",
    color: "#fff",
    border: "2px solid #fff",
    "&:hover": {
      background: "#000",
    },
  },
  addBtn: {
    color: "#fff",
    margin: theme.spacing(1),
    border: "1px solid #ff8f46",
  },
});

export default calculatorStyle;
