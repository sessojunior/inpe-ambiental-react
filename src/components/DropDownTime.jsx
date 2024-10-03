import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function DropDownTime({
  forecastTime,
  setForecastTime,
  frame,
  setFrame,
  hours,
}) {
  // console.log("DropDownTime forecastTime", forecastTime)
  // console.log("forecastTime", forecastTime)

  const classButtonTime =
    "size-8 md:size-[38px] inline-flex justify-center items-center gap-2 rounded-full font-bold bg-white text-black hover:bg-blue-100 text-xs md:text-sm";
  const classButtonTimeActive =
    "size-8 md:size-[38px] inline-flex justify-center items-center gap-2 rounded-full font-bold bg-blue-600 hover:bg-blue-500 text-gray-50 text-xs md:text-sm";

  const handleChangeTime = (time) => {
    setForecastTime(time);
    setFrame({ ...frame, forecastTime: time });
  };

  const [showNote, setShowNote] = useState(false);

  const handleShowNote = () => {
    setShowNote(!showNote);
  };

  return (
    <>
      <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md w-60 z-50">
        <div className="p-4">
          <label className="block w-full pb-3 text-sm font-bold">
            Horas de previsão
            <sup className="text-red-600">
              <FaInfoCircle className="inline" />
            </sup>
          </label>
          <div className="text-xs bg-red-50 p-2 border border-red-100 rounded-md mb-3">
            <b>Nota importante:</b> A previsão da qualidade do ar começa no dia
            anterior,{" "}
            {!showNote && (
              <>
                <span
                  onClick={() => setShowNote(true)}
                  className="cursor-pointer text-red-600"
                >
                  [continuar lendo...]
                </span>
              </>
            )}
            {showNote && (
              <>
                com dados de emissões de queimadas, baseados nos focos
                detectados por satélites (análise, indicada por horários
                negativos). Em seguida, é feita a previsão para as 72 horas
                seguintes, assumindo que as emissões estimadas na análise
                permanecerão as mesmas.{" "}
                <span
                  onClick={() => setShowNote(false)}
                  className="cursor-pointer text-red-600"
                >
                  [ocultar nota]
                </span>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {hours.map((time, index) => (
              <button
                key={index}
                className={
                  forecastTime === time
                    ? classButtonTimeActive
                    : classButtonTime
                }
                onClick={() => handleChangeTime(time)}
                title={`Definir para ${Number(time)} horas de previsão`}
              >
                <span>
                  {Number(time)}
                  <small>h</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
