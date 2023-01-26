import { useRef } from 'react';
import { Text, Group, Button, createStyles } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { FiUploadCloud, FiX, FiDownload } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}));

export function FileDropBox() {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);

  return (
      <div className={classes.wrapper}>
        <Dropzone
            openRef={openRef}
            onDrop={() => {}}
            className={classes.dropzone}
            radius="md"
            accept={[MIME_TYPES.pdf]}
            maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Group position="center">
              <Dropzone.Accept>
                <FiDownload size={50} color={theme.colors[theme.primaryColor][6]} stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <FiX size={50} color={theme.colors.red[6]} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <FiUploadCloud
                    size={50}
                    color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                />
              </Dropzone.Idle>
            </Group>

            <Text align="center" weight={700} size="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload resume</Dropzone.Idle>
            </Text>
            <Text align="center" size="sm" mt="xs" color="dimmed">
              Drag&apos;n&apos;drop files here to upload.
            </Text>
          </div>
        </Dropzone>

        <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
          Select files
        </Button>
      </div>
  );
}