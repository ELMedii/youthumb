import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);
  const [copySuccess, setCopySuccess] = useState("");

  // SEO and meta tag setup
  useEffect(() => {
    document.title = "YouTube Thumbnail Downloader - Free and Fast";

    const metaTags = [
      { name: "description", content: "Download high-quality YouTube thumbnails instantly and for free. Choose from HD, SD, and more resolutions." },
      { name: "keywords", content: "YouTube thumbnail downloader, free thumbnail downloader, high-quality thumbnails, YouTube image download" },
      { name: "author", content: "Your Name or Brand Name" },
    ];

    const addedTags = metaTags.map(tag => {
      const metaTag = document.createElement("meta");
      metaTag.name = tag.name;
      metaTag.content = tag.content;
      document.head.appendChild(metaTag);
      return metaTag;
    });

    return () => {
      addedTags.forEach(tag => document.head.removeChild(tag));
    };
  }, []);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoId = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoId}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
      alert("Invalid YouTube URL. Please enter a valid one.");
    }
  };

  const handleCopy = (url) => {
    copy(url);
    setCopySuccess("URL copied to clipboard!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">YouTube Thumbnail Downloader</h1>
        <p className="text-gray-600">Download high-quality thumbnails from YouTube videos.</p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {copySuccess && <p className="text-green-600 text-center mt-2">{copySuccess}</p>}
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option text-center">
                <img
                  src={option.url}
                  alt={`Thumbnail in ${option.resolution}`}
                  className="rounded border"
                />
                <p className="text-gray-700 mt-2">{option.resolution}</p>
                <button
                  className="btn-blue mt-2"
                  onClick={() => handleCopy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
