-- Add image_url column to announcements table
ALTER TABLE announcements
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add image_url column to changelogs table
ALTER TABLE changelogs
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add comment to describe the columns
COMMENT ON COLUMN announcements.image_url IS 'Optional image URL for announcement cover image';
COMMENT ON COLUMN changelogs.image_url IS 'Optional image URL for changelog cover image';
