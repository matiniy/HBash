import React from 'react';

const TRECNotice: React.FC = () => {
  return (
    <div className="trec-notice-content">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-0">
        <div className="text-center mb-6 sm:mb-8">
          <p className="trec-notice-id text-sm sm:text-base">
            TREC ID: CN 1-5
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 leading-relaxed text-sm sm:text-base">
          <div>
            <p className="mb-4 trec-notice-strong">
              THE TEXAS REAL ESTATE COMMISSION (TREC) REGULATES
            </p>
            <p className="trec-notice-text">
              REAL ESTATE BROKERS AND SALES AGENTS, REAL ESTATE INSPECTORS, EASEMENT AND RIGHT-OF-WAY AGENTS, 
              AND TIMESHARE INTEREST PROVIDERS
            </p>
          </div>

          <div>
            <p className="mb-2 trec-notice-text">
              YOU CAN FIND MORE INFORMATION AND CHECK THE STATUS OF A LICENSE HOLDER AT:
            </p>
            <a 
              href="https://www.trec.texas.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="trec-notice-link"
            >
              WWW.TREC.TEXAS.GOV
            </a>
          </div>

          <div>
            <p className="trec-notice-text">
              YOU CAN SEND A COMPLAINT AGAINST A LICENSE HOLDER TO TREC. A COMPLAINT FORM IS AVAILABLE ON THE TREC WEBSITE.
            </p>
          </div>

          <div>
            <p className="trec-notice-text">
              TREC ADMINISTERS THE REAL ESTATE RECOVERY TRUST ACCOUNT WHICH MAY BE USED TO SATISFY A CIVIL COURT JUDGMENT AGAINST A BROKER, SALES AGENT, OR EASEMENT OR RIGHT-OF-WAY AGENT, IF CERTAIN REQUIREMENTS ARE MET.
            </p>
          </div>

          <div>
            <p className="trec-notice-text">
              REAL ESTATE INSPECTORS ARE REQUIRED TO MAINTAIN ERRORS AND OMISSIONS INSURANCE TO COVER LOSSES ARISING FROM THE PERFORMANCE OF A REAL ESTATE INSPECTION IN A NEGLIGENT OR INCOMPETENT MANNER.
            </p>
          </div>

          <div className="trec-notice-note">
            <p className="trec-notice-strong mb-2">PLEASE NOTE:</p>
            <p className="trec-notice-text">
              INSPECTORS MAY LIMIT LIABILITY THROUGH PROVISIONS IN THE CONTRACT OR INSPECTION AGREEMENT BETWEEN THE INSPECTOR AND THEIR CLIENTS. PLEASE BE SURE TO READ ANY CONTRACT OR AGREEMENT CAREFULLY. IF YOU DO NOT UNDERSTAND ANY TERMS OR PROVISIONS, CONSULT AN ATTORNEY.
            </p>
          </div>

          <div className="pt-6 border-t border-[#144552]/20">
            <p className="trec-notice-strong mb-2">TEXAS REAL ESTATE COMMISSION</p>
            <p className="trec-notice-text">P.O. BOX 12188</p>
            <p className="trec-notice-text">AUSTIN, TEXAS 78711-2188</p>
            <p className="mt-2">
              <a 
                href="tel:5129363000" 
                className="trec-notice-link"
              >
                (512) 936-3000
              </a>
            </p>
          </div>

          <div className="trec-notice-footer text-xs pt-4 border-t border-[#144552]/15">
            <p className="trec-notice-text">CN 1-5</p>
            <p className="trec-notice-text mt-2">
              This copyright protected form was produced using Lone Wolf Real Estate Technologies – 231 Shearson Crescent #310, Cambridge, Ontario, Canada N1T 1J3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRECNotice;
