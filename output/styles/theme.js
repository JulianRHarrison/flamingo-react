const theme = {
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  colors: {
    alertErrorActive: "hsl(4, 90%, 58%)",
    alertErrorInactive: "hsl(5, 85%, 89%)",
    alertSuccessActive: "hsl(88, 50%, 53%)",
    alertSuccessInactive: "hsl(88, 50%, 88%)",
    alertWarningActive: "hsl(14, 100%, 63%)",
    alertWarningInactive: "hsl(14, 100%, 91%)",
    black: "hsl(0, 0%, 18%)",
    grey1: "hsl(0, 0%, 59%)",
    grey2: "hsl(0, 0%, 88%)",
    primary100: "hsl(328, 74%, 95%)",
    primary900: "hsl(328, 76%, 55%)",
    secondary100: "hsl(196, 85%, 95%)",
    secondary900: "hsl(195, 98%, 47%)",
    tertiary00: "hsl(202, 100%, 98%)",
    tertiary900: "hsl(200, 100%, 84%)",
    white: "hsl(0, 0%, 100%)",
  },
  fontSizes: ["0.75rem", "0.875rem", "1rem", "1.25rem", "1.75rem"],
  lineHeights: {
    stepLabelStepLabelText: "14px",
    labelBodyText3: "17px",
    b1LBodyText1Light: "20px",
    buttonButtonText: "20px",
    captionCaptionText: "20px",
    captionBoldCaptionTextBold: "20px",
    s1SubTitle1: "20px",
    s2SubTitle2: "20px",
    s2Subtitle2: "20px",
    b1BodyText1: "24px",
    b2BodyText2: "24px",
    h2Header2: "24px",
    h1Header1: "36px",
  },
  letterSpacings: {
    labelBodyText3: "-0.20000000298023224px",
    s2SubTitle2: "-0.20000000298023224px",
    s1SubTitle1: "0.009999999776482582px",
    buttonButtonText: "0.20000000298023224px",
    captionCaptionText: "0.4000000059604645px",
    captionBoldCaptionTextBold: "0.4000000059604645px",
  },
  fonts: {
    museoSans300: "MuseoSans-300",
    museoSans500: "MuseoSans-500",
    museoSans700: "MuseoSans-700",
    museoSansRounded700: "MuseoSansRounded-700",
  },
  text: {
    b1BodyText1: {
      fontFamily: "museoSans500",
      lineHeight: "h2Header2",
      fontSize: 2,
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "top",
    },
    b1LBodyText1Light: {
      fontFamily: "museoSans300",
      lineHeight: "s2Subtitle2",
      fontSize: 2,
      fontWeight: "light",
      textAlign: "left",
      verticalAlign: "top",
    },
    b2BodyText2: {
      fontFamily: "museoSans500",
      lineHeight: "h2Header2",
      fontSize: 1,
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "top",
    },
    buttonButtonText: {
      fontFamily: "museoSans700",
      letterSpacing: "buttonButtonText",
      lineHeight: "s2Subtitle2",
      fontSize: 1,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
    captionCaptionText: {
      fontFamily: "museoSans500",
      letterSpacing: "captionBoldCaptionTextBold",
      lineHeight: "s2Subtitle2",
      fontSize: 0,
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "top",
    },
    captionBoldCaptionTextBold: {
      fontFamily: "museoSans700",
      letterSpacing: "captionBoldCaptionTextBold",
      lineHeight: "s2Subtitle2",
      fontSize: 0,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
    h1Header1: {
      fontFamily: "museoSansRounded700",
      lineHeight: "h1Header1",
      fontSize: 4,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
    h2Header2: {
      fontFamily: "museoSansRounded700",
      lineHeight: "h2Header2",
      fontSize: 3,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
    labelBodyText3: {
      fontFamily: "museoSans300",
      letterSpacing: "s2SubTitle2",
      lineHeight: "labelBodyText3",
      fontSize: 1,
      fontWeight: "light",
      textAlign: "left",
      verticalAlign: "top",
    },
    s1SubTitle1: {
      fontFamily: "museoSans700",
      letterSpacing: "s1SubTitle1",
      lineHeight: "s2Subtitle2",
      fontSize: 2,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
    s2SubTitle2: {
      fontFamily: "museoSans700",
      letterSpacing: "s2SubTitle2",
      lineHeight: "s2Subtitle2",
      fontSize: 1,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
    s2Subtitle2: {
      fontFamily: "museoSans500",
      lineHeight: "s2Subtitle2",
      fontSize: 1,
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "top",
    },
    stepLabelStepLabelText: {
      fontFamily: "museoSans700",
      lineHeight: "stepLabelStepLabelText",
      fontSize: 0,
      fontWeight: "bold",
      textAlign: "left",
      verticalAlign: "top",
    },
  },
};

export default theme;
