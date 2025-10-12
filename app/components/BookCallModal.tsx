'use client';

import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Shield, CheckCircle, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TimeSlot = {
  time: string;
  available: boolean;
};

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const { language } = useLanguage();
  const [step, setStep] = useState<'calendar' | 'details'>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const content = {
    en: {
      title: "Schedule Your Free Strategy Call",
      subtitle: "15-minute conversation to understand your needs",
      calendar: {
        title: "Select a Date & Time",
        description: "Choose a convenient slot for your consultation",
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      cta: "Confirm Booking",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "No credit card required" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Zero commitment" },
        { icon: <Clock className="w-4 h-4" />, text: "15min call" }
      ]
    },
    es: {
      title: "Agenda tu Llamada Estratégica Gratis",
      subtitle: "15 minutos para entender tus necesidades",
      calendar: {
        title: "Selecciona Fecha y Hora",
        description: "Elige un espacio conveniente para tu consulta",
        days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      },
      cta: "Confirmar Reserva",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "Sin tarjeta de crédito" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Sin compromiso" },
        { icon: <Clock className="w-4 h-4" />, text: "Llamada de 15min" }
      ]
    }
  };

  const t = content[language];

  // Generate dates for current week
  const getDatesForWeek = (startDate: Date) => {
    const dates = [];
    const week = new Date(startDate);
    week.setDate(week.getDate() - week.getDay()); // Start from Sunday

    for (let i = 0; i < 7; i++) {
      dates.push(new Date(week));
      week.setDate(week.getDate() + 1);
    }
    return dates;
  };

  // Generate time slots
  const getTimeSlots = (date: Date): TimeSlot[] => {
    const isToday = new Date().toDateString() === date.toDateString();
    const currentHour = new Date().getHours();

    const slots: TimeSlot[] = [];
    // Business hours: 9 AM to 5 PM
    for (let hour = 9; hour < 17; hour++) {
      // If it's today, only show future slots
      if (!isToday || hour > currentHour) {
        slots.push({
          time: `${hour.toString().padStart(2, '0')}:00`,
          available: Math.random() > 0.3 // Simulate availability
        });
      }
    }
    return slots;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handlePrevWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeek(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeek(newDate);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep('details');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && formData.name && formData.email) {
      try {
        const response = await fetch('/api/book-call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || '',
            preferredDate: `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00.000Z`,
            message: `Scheduled time: ${selectedTime}`,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to book call');
        }

        const result = await response.json();
        console.log('Booking created:', result);
        onClose();
      } catch (error) {
        console.error('Error creating booking:', error);
        // Here you would typically show an error message to the user
      }
    }
  };

  const weekDates = getDatesForWeek(currentWeek);
  const timeSlots = selectedDate ? getTimeSlots(selectedDate) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-dark-secondary border border-primary/20 rounded-2xl p-4 sm:p-6 md:p-8 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-md mx-auto relative z-10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t.title}
              </h3>
              <p className="text-gray-400">
                {t.subtitle}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 'calendar' ? (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  {/* Calendar Section */}
                  <div className="bg-white/5 rounded-xl p-4 sm:p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display font-semibold text-white">
                        {t.calendar.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrevWeek}
                          className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-400" />
                        </button>
                        <button
                          onClick={handleNextWeek}
                          className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    {/* Days of the week */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {t.calendar.days.map((day) => (
                        <div key={day} className="text-center text-xs text-gray-400">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar dates */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {weekDates.map((date, idx) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        const isToday = new Date().toDateString() === date.toDateString();
                        const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                        return (
                          <button
                            key={idx}
                            onClick={() => !isPast && handleDateClick(date)}
                            disabled={isPast}
                            className={cn(
                              'py-2 rounded-lg text-sm transition-colors relative',
                              isPast ? 'text-gray-600 cursor-not-allowed' :
                              isSelected ? 'bg-primary text-white' :
                              isToday ? 'bg-white/10 text-white' :
                              'text-gray-300 hover:bg-white/10'
                            )}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time slots */}
                    {selectedDate && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => slot.available && handleTimeClick(slot.time)}
                            disabled={!slot.available}
                            className={cn(
                              'py-2 px-2 rounded-lg text-sm transition-colors',
                              !slot.available ? 'text-gray-600 cursor-not-allowed' :
                              selectedTime === slot.time ? 'bg-primary text-white' :
                              'text-gray-300 hover:bg-white/10'
                            )}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleContinue}
                    disabled={!selectedDate || !selectedTime}
                    className={cn(
                      'w-full mt-6 py-3 rounded-xl font-semibold transition-colors',
                      selectedDate && selectedTime
                        ? 'bg-primary text-white hover:bg-primary-light'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    )}
                  >
                    {language === 'en' ? 'Continue' : 'Continuar'}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields */}
                    <div>
                      <label className="block text-gray-300 mb-2 font-semibold">
                        {language === 'en' ? 'Your name' : 'Tu nombre'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/10 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all"
                        placeholder={language === 'en' ? 'John Smith' : 'Juan Pérez'}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-semibold">
                        {language === 'en' ? 'Email' : 'Correo electrónico'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/10 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all"
                        placeholder={language === 'en' ? 'john@example.com' : 'juan@ejemplo.com'}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-semibold">
                        {language === 'en' ? 'Phone (optional)' : 'Teléfono (opcional)'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/10 border-2 border-primary/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary/60 focus:outline-none transition-all"
                        placeholder={language === 'en' ? '+1 555-123-4567' : '+34 612 345 678'}
                      />
                    </div>

                    {/* Selected date display */}
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-gray-400 text-sm">
                        {language === 'en' ? 'Selected time:' : 'Hora seleccionada:'}
                      </p>
                      <p className="text-white font-semibold">
                        {selectedDate?.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })} - {selectedTime}
                      </p>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-xl transition-colors mt-6"
                    >
                      {t.cta}
                    </button>

                    {/* Back button */}
                    <button
                      type="button"
                      onClick={() => setStep('calendar')}
                      className="w-full bg-transparent hover:bg-white/10 text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      {language === 'en' ? 'Back' : 'Volver'}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400 mt-6">
              {t.features.map((feature, index) => (
                <Fragment key={index}>
                  {index > 0 && <span>•</span>}
                  <span className="flex items-center gap-1">
                    {feature.icon}
                    {feature.text}
                  </span>
                </Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}