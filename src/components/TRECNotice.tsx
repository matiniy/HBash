import React from 'react';

const TRECNotice: React.FC = () => {
  return (
    <div className="bg-deep-forest text-white p-8 rounded-lg border border-aqua-neon/20">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-aqua-neon mb-4">
            Consumer Protection Notice
          </h2>
          <p className="text-grey-light text-sm">
            TREC ID: CN 1-5
          </p>
        </div>

        <div className="space-y-6 text-grey-light leading-relaxed">
          <div>
            <p className="mb-4">
              <strong className="text-white">THE TEXAS REAL ESTATE COMMISSION (TREC) REGULATES</strong>
            </p>
            <p>
              REAL ESTATE BROKERS AND SALES AGENTS, REAL ESTATE INSPECTORS, EASEMENT AND RIGHT-OF-WAY AGENTS, 
              AND TIMESHARE INTEREST PROVIDERS
            </p>
          </div>

          <div>
            <p className="mb-2">
              YOU CAN FIND MORE INFORMATION AND CHECK THE STATUS OF A LICENSE HOLDER AT:
            </p>
            <a 
              href="https://www.trec.texas.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-aqua-neon hover:text-[#00e694] underline transition-colors"
            >
              WWW.TREC.TEXAS.GOV
            </a>
          </div>

          <div>
            <p>
              YOU CAN SEND A COMPLAINT AGAINST A LICENSE HOLDER TO TREC. A COMPLAINT FORM IS AVAILABLE ON THE TREC WEBSITE.
            </p>
          </div>

          <div>
            <p>
              TREC ADMINISTERS THE REAL ESTATE RECOVERY TRUST ACCOUNT WHICH MAY BE USED TO SATISFY A CIVIL COURT JUDGMENT AGAINST A BROKER, SALES AGENT, OR EASEMENT OR RIGHT-OF-WAY AGENT, IF CERTAIN REQUIREMENTS ARE MET.
            </p>
          </div>

          <div>
            <p>
              REAL ESTATE INSPECTORS ARE REQUIRED TO MAINTAIN ERRORS AND OMISSIONS INSURANCE TO COVER LOSSES ARISING FROM THE PERFORMANCE OF A REAL ESTATE INSPECTION IN A NEGLIGENT OR INCOMPETENT MANNER.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded border border-aqua-neon/10">
            <p className="text-white font-semibold mb-2">PLEASE NOTE:</p>
            <p>
              INSPECTORS MAY LIMIT LIABILITY THROUGH PROVISIONS IN THE CONTRACT OR INSPECTION AGREEMENT BETWEEN THE INSPECTOR AND THEIR CLIENTS. PLEASE BE SURE TO READ ANY CONTRACT OR AGREEMENT CAREFULLY. IF YOU DO NOT UNDERSTAND ANY TERMS OR PROVISIONS, CONSULT AN ATTORNEY.
            </p>
          </div>

          <div className="pt-6 border-t border-aqua-neon/20">
            <p className="text-white font-semibold mb-2">TEXAS REAL ESTATE COMMISSION</p>
            <p>P.O. BOX 12188</p>
            <p>AUSTIN, TEXAS 78711-2188</p>
            <p className="mt-2">
              <a 
                href="tel:5129363000" 
                className="text-aqua-neon hover:text-[#00e694] transition-colors"
              >
                (512) 936-3000
              </a>
            </p>
          </div>

          <div className="text-xs text-grey-light pt-4 border-t border-aqua-neon/10">
            <p>CN 1-5</p>
            <p className="mt-2">
              This copyright protected form was produced using Lone Wolf Real Estate Technologies – 231 Shearson Crescent #310, Cambridge, Ontario, Canada N1T 1J3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRECNotice;
