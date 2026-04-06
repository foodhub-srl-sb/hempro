-- Complete RLS policies for admin access to subscriptions and contacts
-- Run this on the new Supabase project after the initial schema migration

-- Authenticated users (admins) can read subscriptions
CREATE POLICY "Allow authenticated read for subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users (admins) can delete subscriptions
CREATE POLICY "Allow authenticated delete for subscriptions"
  ON subscriptions FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users (admins) can read contacts
CREATE POLICY "Allow authenticated read for contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users (admins) can update contact status (new -> read -> replied)
CREATE POLICY "Allow authenticated update for contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users (admins) can delete contacts
CREATE POLICY "Allow authenticated delete for contacts"
  ON contacts FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users (admins) can insert/update/delete contents
CREATE POLICY "Allow authenticated write for contents"
  ON contents FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update for contents"
  ON contents FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete for contents"
  ON contents FOR DELETE
  TO authenticated
  USING (true);

-- Add updated_at trigger for contents
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contents_updated_at
  BEFORE UPDATE ON contents
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
