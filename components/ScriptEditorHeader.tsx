import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function ScriptEditorHeader() {
  const { classes } = useStyles();

  return (
      <Box pb={120}>
        <Header height={60} px="md">
          <Group position="apart" sx={{ height: '100%' }}>
            <div>Script Editor</div>

            <Group className={classes.hiddenMobile}>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>

          </Group>
        </Header>
      </Box>
  );
}