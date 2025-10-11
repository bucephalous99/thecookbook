'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import BookCallForm from './BookCallForm';
import { Toaster } from 'sonner';

export default function BookCallModal({ isOpen, onClose }) {
  return (
    <>
      <Toaster position="top-center" expand={false} richColors />
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-900/95 backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all border border-gray-700/50">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold text-white mb-2"
                      >
                        Agenda tu Consultoría Gratuita
                      </Dialog.Title>
                      <p className="text-gray-300">
                        Te contactaremos en menos de 24 horas para confirmar los detalles
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                      onClick={onClose}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="mt-4">
                    <BookCallForm onSuccess={onClose} />
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sin compromiso</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>Respuesta en 24h</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Soporte local</span>
                      </span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}