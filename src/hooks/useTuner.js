import Tuner from '../service/tuner.service';
import {useRef, useMemo, useState} from 'react';

export default function useTuner() {
  const lastNoteName = useRef(null);
  const [note, setNote] = useState({note: null, cents: null});

  const tuner = useMemo(() => {
    const tuner = new Tuner();
    tuner.start().then(() => {
      tuner.onNoteDetected = _note => {
        var _key = _note.cents + '-' + _note.value;

        //  if (lastNoteName.current === _key) {
        setNote(_note);
        //   } else {
        //     lastNoteName.current = _key;
        //   }
      };
    });
    return tuner;
  }, []);

  return [tuner, note];
}
