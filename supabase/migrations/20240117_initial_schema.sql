-- Create ENUM types
CREATE TYPE content_type AS ENUM ('SCIENTIFIC', 'NEWS', 'EVENT', 'VIDEO', 'PODCAST');

-- Create contents table
CREATE TABLE contents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  full_content TEXT,
  type content_type NOT NULL DEFAULT 'NEWS',
  category TEXT NOT NULL,
  action_code TEXT,
  image_url TEXT,
  author TEXT,
  published_date DATE,
  tags TEXT[],
  video_url TEXT,
  audio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create subscriptions table (newsletter)
CREATE TABLE subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  organization TEXT,
  preferences TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table (contact form)
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- new, read, replied
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies (Public Read for contents)
CREATE POLICY "Allow public read access" ON contents FOR SELECT USING (true);

-- Create policies (Start only allow insert for forms)
CREATE POLICY "Allow public insert for subscriptions" ON subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert for contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Only authenticated admins can view/edit subscriptions and contacts
-- (This requires setting up Auth roles later, for now we keep it restrictive)
