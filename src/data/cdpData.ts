import { CDPInfo } from '../types';

export const cdpList: CDPInfo[] = [
  {
    name: 'Segment',
    docUrl: 'https://segment.com/docs/?ref=nav',
    description: 'Segment is a customer data platform (CDP) that helps you collect, clean, and control your customer data.',
    logo: 'segment'
  },
  {
    name: 'mParticle',
    docUrl: 'https://docs.mparticle.com/',
    description: 'mParticle is a customer data platform that helps brands collect and connect their data to any service or system.',
    logo: 'layers'
  },
  {
    name: 'Lytics',
    docUrl: 'https://docs.lytics.com/',
    description: 'Lytics is a customer data platform that helps marketers understand customer behavior and deliver personalized marketing.',
    logo: 'database'
  },
  {
    name: 'Zeotap',
    docUrl: 'https://docs.zeotap.com/home/en-us/',
    description: 'Zeotap is a customer intelligence platform that helps companies better understand their customers and predict behaviors.',
    logo: 'zap'
  }
];

// Sample documentation data (in a real application, this would be fetched from the actual documentation sites)
export const sampleDocData = {
  segment: [
    {
      title: "Setting up a new source in Segment",
      content: "To set up a new source in Segment: 1. Log in to your Segment workspace. 2. Navigate to Sources > Add Source. 3. Select the type of source you want to add. 4. Follow the configuration steps for your specific source type. 5. Once configured, Segment will provide you with the necessary code snippets or API keys to start sending data.",
      url: "https://segment.com/docs/connections/sources/"
    },
    {
      title: "Creating a destination in Segment",
      content: "To create a destination in Segment: 1. Go to your Segment workspace. 2. Navigate to Destinations > Add Destination. 3. Search for and select your desired destination. 4. Connect the destination to an existing source. 5. Configure the destination-specific settings. 6. Enable the destination when you're ready to start sending data.",
      url: "https://segment.com/docs/connections/destinations/"
    }
  ],
  mparticle: [
    {
      title: "Creating a user profile in mParticle",
      content: "To create a user profile in mParticle: 1. Implement the mParticle SDK in your application. 2. Use the identify method to create a user identity. 3. Add user attributes using the setUserAttribute method. 4. You can set multiple user identities like email, customer ID, etc. 5. User profiles are automatically created and updated as events and attributes are collected.",
      url: "https://docs.mparticle.com/developers/sdk/web/users/"
    },
    {
      title: "Setting up data feeds in mParticle",
      content: "To set up data feeds in mParticle: 1. Navigate to Setup > Inputs > Data Feeds. 2. Click 'Add Data Feed'. 3. Select the provider from the list. 4. Configure the provider-specific settings. 5. Set up the desired event mappings. 6. Activate the data feed to start receiving data.",
      url: "https://docs.mparticle.com/guides/data-feeds/"
    }
  ],
  lytics: [
    {
      title: "Building an audience segment in Lytics",
      content: "To build an audience segment in Lytics: 1. Go to Audiences in the main navigation. 2. Click 'Create Audience'. 3. Define your audience criteria using the segment builder. 4. You can use behavioral data, user attributes, or content affinities. 5. Preview your audience to see estimated size. 6. Save and activate your audience for use in campaigns or exports.",
      url: "https://docs.lytics.com/product/audiences/"
    },
    {
      title: "Setting up a campaign in Lytics",
      content: "To set up a campaign in Lytics: 1. Navigate to Campaigns in the main menu. 2. Click 'Create Campaign'. 3. Select your campaign type (web, email, etc.). 4. Choose the audience you want to target. 5. Configure your campaign content and settings. 6. Set up A/B testing if desired. 7. Activate the campaign when ready.",
      url: "https://docs.lytics.com/product/campaigns/"
    }
  ],
  zeotap: [
    {
      title: "Integrating data with Zeotap",
      content: "To integrate your data with Zeotap: 1. Log in to your Zeotap account. 2. Go to the Integrations section. 3. Select 'Add New Integration'. 4. Choose the type of integration (file upload, API, etc.). 5. Configure the integration settings according to your data source. 6. Set up the data mapping to match Zeotap's schema. 7. Activate the integration to start the data flow.",
      url: "https://docs.zeotap.com/home/en-us/integrations/"
    },
    {
      title: "Creating segments in Zeotap",
      content: "To create segments in Zeotap: 1. Navigate to the Segments section. 2. Click 'Create New Segment'. 3. Define your segment criteria using the segment builder. 4. You can use first-party data, third-party data, or a combination. 5. Preview your segment size and composition. 6. Save and publish your segment for activation across channels.",
      url: "https://docs.zeotap.com/home/en-us/segments/"
    }
  ]
};

// Comparison data for bonus feature
export const cdpComparisons = [
  {
    title: "Audience Creation: Segment vs Lytics",
    content: "Segment's audience creation focuses on event-based segmentation and requires SQL knowledge for complex segments. Lytics offers a more user-friendly interface with behavioral scoring and content affinity features. Lytics provides more advanced machine learning capabilities for predictive audiences, while Segment offers more granular control over raw data.",
    url: "#"
  },
  {
    title: "Data Collection: mParticle vs Segment",
    content: "Both mParticle and Segment offer SDK-based data collection across platforms. Segment has a wider range of source integrations, while mParticle offers more advanced data quality features like validation and filtering at collection time. mParticle provides more granular user privacy controls, while Segment offers a simpler implementation process.",
    url: "#"
  },
  {
    title: "Identity Resolution: Zeotap vs mParticle",
    content: "Zeotap specializes in identity resolution with a focus on third-party data enrichment. mParticle offers a more flexible identity mapping system for first-party data across devices. Zeotap provides stronger probabilistic matching capabilities, while mParticle excels at deterministic cross-device identification within your own customer base.",
    url: "#"
  }
];

// Irrelevant topics to handle off-topic questions
export const irrelevantTopics = [
  {
    title: "Off-topic: General Questions",
    content: "I'm a specialized chatbot focused on helping with Customer Data Platform (CDP) questions related to Segment, mParticle, Lytics, and Zeotap. I can't provide information about movies, weather, news, or other general topics. Please ask me how to accomplish specific tasks in these CDP platforms, and I'll be happy to help!",
    url: "#"
  }
];