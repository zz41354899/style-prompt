-- Create storage bucket for notifications images
-- Note: This needs to be run in Supabase Dashboard or via CLI

-- Insert storage bucket (run this in SQL Editor if bucket doesn't exist)
INSERT INTO storage.buckets (id, name, public)
VALUES ('notifications', 'notifications', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
CREATE POLICY "Public read access for notifications" ON storage.objects
FOR SELECT USING (bucket_id = 'notifications');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload to notifications" ON storage.objects
FOR INSERT WITH CHECK (
    bucket_id = 'notifications' 
    AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete from notifications" ON storage.objects
FOR DELETE USING (
    bucket_id = 'notifications' 
    AND auth.role() = 'authenticated'
);
