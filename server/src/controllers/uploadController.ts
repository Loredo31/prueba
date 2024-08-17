import { Request, Response } from 'express';
import { multer } from 'multer';
import path from 'path';

// Configurar almacenamiento de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../assets/images'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('foto');

class UploadController {
  public uploadImage(req: Request, res: Response): void {
    upload(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ filePath: `/assets/images/${req.file.filename}` });
    });
  }
}

export const uploadController = new UploadController();
