import { createClient } from 'contentful';

export const useConstenful = () => {
  const client = createClient({
    space: 'g0en7fgt1ovd',
    accessToken: 'mCpA1hcTWzYsLLL5okbNznJOUN_LxihoLF6E_NLdYaE',
    host: 'preview.contentful.com',
  });

  const getArtists = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'artist',
        select: ['fields'],
        order: ['fields.name'],
      });

      const sanitizedEntries = entries.items.map((item) => {
        // const avatar = (item.fields.avatar as { fields?: any })?.fields;
        //above and below works need to fix typing
        return {
          ...item.fields,
          // avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching artist: ${error}`);
    }
  };

  return { getArtists };
};
