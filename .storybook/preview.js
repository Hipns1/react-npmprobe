import "../styles/globals.css"

const styles = {
  display: 'flex',
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: '100%',
  gap: "10px 30px",
  padding: "20px"
}

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>)
]

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
