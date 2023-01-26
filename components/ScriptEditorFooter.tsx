import { createStyles, Group, ActionIcon } from '@mantine/core';
import { FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 50,
    borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function ScriptEditorFooter() {
  const { classes } = useStyles();

  return (
      <div className={classes.footer}>
        <Group className={classes.inner}>
          <div>Script Editor</div>
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon size="lg">
              <FiTwitter size={18} />
            </ActionIcon>
            <ActionIcon size="lg">
              <FiYoutube size={18} />
            </ActionIcon>
            <ActionIcon size="lg">
              <FiInstagram size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </div>
  );
}