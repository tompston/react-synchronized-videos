import { useEffect, useState } from 'react'

/** interface with
 * - Array of objects that are passed to the DebugGrid component
 * - optional classname to change properties for the debug box
 * */
interface DebugGridInterface {
    rows: DebugRowInterface[]
    className?: string
    debug?: boolean
}

/**
 * Prop interface for values that are needed for one row
 */
interface DebugRowInterface {
    label: string
    value: any
    showDetails?: boolean
}

/**
 * #### Component used to show variables
 *
 * @example `with init class`
  <DebugGrid
        rows={[
          { label: 'email', value: email },
        ]}
  />
 *
 * @example `with changend css properties`
 *  <DebugGrid
 *       rows={[
 *         { label: 'email', value: email },
 *       ]}
 *      className="bg-blue-600"
 *   />
 */
export function DebugGrid({
    rows,
    className = 'z-[999] bottom-0 right-0 fixed bg-red-600 m-8 text-white p-4 fs-9 leading-none',
    debug = true
}: DebugGridInterface) {
    if (debug) {
        return (
            <div className={`${className}`}>
                <div className="fs-7 fw-700"> Debug Grid</div>
                <div className="grid grid-cols-[140px_auto] fw-700 opacity-50 fs-10 mt-2">
                    <div>LABEL</div>
                    <div>VALUE</div>
                </div>
                <div className="w-[310px] xs:w-full">
                    {rows.map((row, index) => (
                        <DebugRow value={row.value} label={row.label} showDetails={row.showDetails} key={index} />
                    ))}
                </div>
            </div>
        )
    } else return null
}

/**
 * ### Element to which we pass the debug values
 * 
  If showDetails is true, return a div that can 
  toggle a modal window which shows the full 
  value. Used when the passed down value is long 
  and is hard to inspect from the debug box.
 */
function DebugRow({ value, label, showDetails = false }: DebugRowInterface) {
    const [modalIsShown, setModalIsShown] = useState<boolean>(false)

    return (
        <div className="grid grid-cols-[140px_auto] border-b-white/[0.3] border-b py-2 font-mono fs-10">
            {showDetails ? (
                <div className="" onClick={() => setModalIsShown(!modalIsShown)}>
                    <span className="bg-red-900 px-2 py-0.5 border-rad-6 cursor-pointer">{label}</span>
                </div>
            ) : (
                <div>{label}</div>
            )}

            <div className="overflow-x-auto max-h-[70px] relative">
                <div className="overflow-y-hidden">{value}</div>

                {modalIsShown && (
                    <div className="fixed inset-0 text-black">
                        <div className="flex-center h-full">
                            <div className="w-[650px] bg-red-700 text-white p-6 h-[600px] overflow-auto fs-10">
                                <div className="relative">
                                    <div>{value}</div>
                                    <button
                                        className="absolute right-0 top-0 border border-white py-2 px-4"
                                        onClick={() => setModalIsShown(!modalIsShown)}
                                    >
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}