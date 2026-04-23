const [major] = process.versions.node.split('.').map(Number);

if (major < 20 || major >= 25) {
  console.error(
    [
      `Unsupported Node.js version: ${process.version}.`,
      'This project currently runs correctly on Node 20 through 24.',
      'Node 25 causes a server-side localStorage crash in Next.js 15 for this app.',
      'Switch to Node 20 before running dev, build, or start.',
    ].join('\n')
  );

  process.exit(1);
}
