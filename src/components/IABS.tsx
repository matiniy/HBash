import React from 'react';

interface IABSProps {
  documentPath?: string;
  documentName?: string;
}

const IABS: React.FC<IABSProps> = ({ 
  documentPath = '/documents/iabs/IABS-Document.pdf',
  documentName = 'IABS Document'
}) => {
  return (
    <div className="bg-deep-forest text-white p-8 rounded-lg border border-aqua-neon/20">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-aqua-neon mb-4">
            Information About Brokerage Services (IABS)
          </h2>
          <p className="text-grey-light text-sm">
            Texas Real Estate Commission Required Disclosure
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-aqua-neon/10">
          <div className="space-y-4">
            <p className="text-grey-light leading-relaxed">
              The Information About Brokerage Services (IABS) is a required disclosure document that provides 
              important information about the types of brokerage services available in Texas real estate transactions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* PDF Viewer */}
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-4">View Document</h3>
                <div className="bg-white/10 rounded-lg p-4 min-h-[600px]">
                  <iframe
                    src={documentPath}
                    className="w-full h-full min-h-[600px] rounded"
                    title="IABS Document"
                  >
                    <p className="text-grey-light">
                      Your browser does not support PDFs. 
                      <a 
                        href={documentPath} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-aqua-neon hover:text-[#00e694] underline ml-2"
                      >
                        Click here to download the PDF
                      </a>
                    </p>
                  </iframe>
                </div>
              </div>
            </div>

            {/* Download Link */}
            <div className="pt-6 border-t border-aqua-neon/20">
              <a
                href={documentPath}
                download
                className="inline-flex items-center px-6 py-3 bg-aqua-neon text-deep-forest rounded-full font-semibold hover:bg-[#00e694] transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download {documentName}
              </a>
            </div>
          </div>
        </div>

        <div className="text-xs text-grey-light pt-4 border-t border-aqua-neon/10 text-center">
          <p>
            This document is provided in accordance with Texas Real Estate Commission requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IABS;
