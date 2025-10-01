import React from "react";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },

];

export default function TrustedBy() {
  return (
    <section className="py-12 dark:bg-gray-900 max-w-5xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-300 mb-6">
        Trusted by leading companies
      </h2>

      {/* Scrolling logos */}
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll space-x-12 w-max">
          {companies.concat(companies).map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-10 w-auto transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
