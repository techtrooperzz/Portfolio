import {SitemapStream, streamToPromise} from "sitemap";

export const generateXML = async(req, res) => {
    res.header("Content-Type", "application/xml");

    const sitemap = new SitemapStream({
        hostname: "https://techtrooperzz.in"
    });


    // Static routes
    sitemap.write({
        url: "/",
        changefreq: "daily",
        priority: 1
    });

    sitemap.end();

    const xml = await streamToPromise(sitemap);

    res.send(xml.toString());
}