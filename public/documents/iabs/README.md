# IABS Document Directory

This directory is for the Information About Brokerage Services (IABS) document.

## How to Add the IABS Document

1. **Upload your IABS document** to this directory (`/public/documents/iabs/`)
   - Supported formats: `.pdf`, `.doc`, `.docx`, `.txt`
   - Recommended: PDF format for best compatibility

2. **Update the IABS page** to reference your document:
   - Open: `src/app/iabs/page.tsx`
   - Update the document path in the component

## Example Document Structure

```
/public/documents/iabs/
  - IABS-Document.pdf (or your document name)
  - README.md (this file)
```

## Display Options

The IABS page can display:
- PDF documents (embedded viewer)
- Text documents (readable format)
- Download links for any document type

