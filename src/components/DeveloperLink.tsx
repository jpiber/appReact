import { Typography, Link } from '@mui/material';

export function DeveloperLink() {
  return (
    <Typography
      variant="caption"
      color="#aaa"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        bgcolor: 'rgba(0,0,0,0.5)',
        borderRadius: 2,
        px: 2,
        py: 0.5,
      }}
    >
      desenvolvedor:{' '}
      <Link
        href="https://instagram.com/jean_piber"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#aaa',
          textDecoration: 'none',
          '&:hover': {
            color: '#fff',
            textDecoration: 'underline',
          },
        }}
      >
        @jean_piber
      </Link>
    </Typography>
  );
} 